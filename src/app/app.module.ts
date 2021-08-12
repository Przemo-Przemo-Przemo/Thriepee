import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { WhatWeDoPhotoComponent } from './introduction/what-we-do/what-we-do-photo/what-we-do-photo.component';
import { WhatWeDoSummaryArtComponent } from './introduction/what-we-do/what-we-do-summaries/what-we-do-summary-art/what-we-do-summary-art.component';
import { WhatWeDoSummaryComedyComponent } from './introduction/what-we-do/what-we-do-summaries/what-we-do-summary-comedy/what-we-do-summary-comedy.component';
import { WhatWeDoSummaryWebDevelopmentComponent } from './introduction/what-we-do/what-we-do-summaries/what-we-do-summary-web-development/what-we-do-summary-web-development.component';
import { WhatWeDoSummaryGamesComponent } from './introduction/what-we-do/what-we-do-summaries/what-we-do-summary-games/what-we-do-summary-games.component';
import { IgnReviewSummaryWidgetComponent } from './shared/widgets/review-summary/ign-review-summary-widget/ign-review-summary-widget.component';
import { RockPaperScissorReviewSummaryWidgetComponent } from './shared/widgets/review-summary/rock-paper-scissor-review-summary-widget/rock-paper-scissor-review-summary-widget.component';
import { BuzzfeedReviewSummaryWidgetComponent } from './shared/widgets/review-summary/buzzfeed-review-summary-widget/buzzfeed-review-summary-widget.component';
import { YahooAnswersReviewSummaryWidgetComponent } from './shared/widgets/review-summary/yahoo-answers-review-summary-widget/yahoo-answers-review-summary-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    WhatWeDoPhotoComponent,
    WhatWeDoSummaryArtComponent,
    WhatWeDoSummaryComedyComponent,
    WhatWeDoSummaryWebDevelopmentComponent,
    WhatWeDoSummaryGamesComponent,
    IgnReviewSummaryWidgetComponent,
    RockPaperScissorReviewSummaryWidgetComponent,
    BuzzfeedReviewSummaryWidgetComponent,
    YahooAnswersReviewSummaryWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
