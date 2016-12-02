//
//  CameraView.m
//  impromptu
//
//  Created by Qingping He on 12/2/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

#import "CameraView.h"

@implementation CameraView
{
  BOOL _paused;
  NSString* path;
}

- (id)init {
  self = [super init];
  if (self) {
    AVCaptureDevice *inputDevice = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    AVCaptureDeviceInput *captureInput = [AVCaptureDeviceInput deviceInputWithDevice:inputDevice error:nil];
    
    AVCaptureVideoDataOutput *captureOutput = [[AVCaptureVideoDataOutput alloc] init];
    /* captureOutput:didOutputSampleBuffer:fromConnection delegate method !*/
    [captureOutput setSampleBufferDelegate:self queue:dispatch_get_main_queue()];
    NSString* key = (NSString*)kCVPixelBufferPixelFormatTypeKey;
    NSNumber* value = [NSNumber numberWithUnsignedInt:kCVPixelFormatType_32BGRA];
    NSDictionary* videoSettings = [NSDictionary dictionaryWithObject:value forKey:key];
    [captureOutput setVideoSettings:videoSettings];
    self.captureSession = [[AVCaptureSession alloc] init];
    NSString* preset = 0;
    if (!preset) {
      preset = AVCaptureSessionPresetMedium;
    }
    self.captureSession.sessionPreset = preset;
    if ([self.captureSession canAddInput:captureInput]) {
      [self.captureSession addInput:captureInput];
    }
    if ([self.captureSession canAddOutput:captureOutput]) {
      [self.captureSession addOutput:captureOutput];
    }
    
    //handle prevLayer
    if (!self.cameraLayer) {
      self.cameraLayer = [AVCaptureVideoPreviewLayer layerWithSession:self.captureSession];
    }
    
    //if you want to adjust the previewlayer frame, here!
    self.cameraLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;
    [self.layer addSublayer: self.cameraLayer];
    [self.captureSession startRunning];
    
    _paused = true;
  }
  return self;
}

- (void)setPaused:(BOOL)paused
{
  bool isPlaying = (self.queue.rate != 0) && (self.queue.error == nil);
  if (isPlaying && paused) {
    [self.queue pause];
    //[self.queue setRate:0.0f];
  } else if (!isPlaying && !paused) {
    [self.queue play];
    //[self.queue setRate:1.0f];
  }
  
  _paused = paused;
  
}

- (void) setPath:(NSString*) nextPath {
  bool playAfter = false;
  if (!_paused) {
    self.paused = true;
    playAfter = true;
  }
  
  [self.queue removeAllItems];
  self.videoURL = [[NSBundle mainBundle] URLForResource:nextPath withExtension:@"mp4"];
  AVPlayerItem* video = [[AVPlayerItem alloc] initWithURL:self.videoURL];
  [self.queue insertItem:video afterItem:nil];
  
  if (playAfter) {
    self.paused = false;
  }
}

- (void)layoutSubviews
{
  [super layoutSubviews];
  
  [CATransaction begin];
  [CATransaction setAnimationDuration:0];
  self.playerLayer.frame = self.bounds;
  [CATransaction commit];
}

@end
