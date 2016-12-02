//
//  CameraView.h
//  impromptu
//
//  Created by Qingping He on 12/2/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
@import AVKit;

@interface CameraView : UIView

@property (strong, nonatomic) NSURL* videoURL;
@property (strong, nonatomic) AVCaptureSession* captureSession;
@property (strong, nonatomic) AVPlayerLayer* cameraLayer;

@property (nonatomic) BOOL videoPlaying;

@end

