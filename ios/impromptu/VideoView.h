//
//  VideoViewController.h
//  impromptu
//
//  Created by Qingping He on 12/1/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
@import AVKit;

@interface VideoView : UIView

@property (strong, nonatomic) NSURL* videoURL;
@property (strong, nonatomic) AVQueuePlayer* queue;
@property (strong, nonatomic) AVPlayerLayer* playerLayer;

@property (nonatomic) BOOL videoPlaying;

@end
