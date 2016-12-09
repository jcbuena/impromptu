//
//  VideoManager.m
//  impromptu
//
//  Created by Qingping He on 12/1/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AVFoundation/AVFoundation.h>

#import "VideoManager.h"
#import "VideoView.h"

@implementation VideoManager

RCT_EXPORT_MODULE()

- (UIView *)view
{
  return [[VideoView alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(paused, BOOL)
RCT_EXPORT_VIEW_PROPERTY(path, NSString)
RCT_EXPORT_VIEW_PROPERTY(file, NSString)
RCT_EXPORT_VIEW_PROPERTY(muted, BOOL)


@end
