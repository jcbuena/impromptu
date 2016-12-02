//
//  VideoViewController.m
//  impromptu
//
//  Created by Qingping He on 12/1/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

#import "VideoView.h"

@implementation VideoView
{
  BOOL _paused;
}

- (id)init {
  self = [super init];
  if (self) {
    self.queue = [[AVQueuePlayer alloc] initWithItems:@[]];

    self.playerLayer = [[AVPlayerLayer alloc] init];
    self.playerLayer.player = self.queue;

    self.playerLayer.frame = self.bounds;
    self.playerLayer.videoGravity = AVLayerVideoGravityResizeAspectFill;
    [self.layer addSublayer:self.playerLayer];

    self.queue.actionAtItemEnd = AVPlayerActionAtItemEndNone;
    
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(playerItemDidReachEnd:)
                                                 name:AVPlayerItemDidPlayToEndTimeNotification
                                               object:[self.queue currentItem]];
    
    self.videoURL = [[NSBundle mainBundle] URLForResource:@"broadchurch" withExtension:@"mp4"];
    AVPlayerItem* video = [[AVPlayerItem alloc] initWithURL:self.videoURL];
    [self.queue insertItem:video afterItem:nil];
    
    _paused = true;
  }
  return self;
}

-(void)dealloc {
  [[NSNotificationCenter defaultCenter] removeObserver:self];
}

- (void)playerItemDidReachEnd:(NSNotification *)notification {
  AVPlayerItem *p = [notification object];
  [p seekToTime:kCMTimeZero];
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

- (void)layoutSubviews
{
  [super layoutSubviews];

  [CATransaction begin];
  [CATransaction setAnimationDuration:0];
  self.playerLayer.frame = self.bounds;
  [CATransaction commit];
}

@end
