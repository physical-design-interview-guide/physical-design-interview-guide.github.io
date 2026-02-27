---
title: "How to check and fix IR drop during routing?"
date: 2025-08-22
draft: false
categories: ["Routing", "Signal-Integrity"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">We can run IR aware full flow</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>IR aware placement</b> : Spread high power
density hotspots to reduce IR drop. Tools settings using setPlaceMode. This is
useful even during routing as during optimization tool adds buf/inv and updates
placement increamentally.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>CCopt/SkewClock</b>: skew the clock to
minimize peak current<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Reinforce_pg:</b> Auto RPG: Loacl PG
stripe/via addition in hotspot area. (separate utility from cadence. Needs
voltus IR setup as input.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Fill:</b> Maximize PG hookup at signoff
stage. <o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1O3w000009foP9EAI&amp;pageName=ArticleContent">https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1O3w000009foP9EAI&amp;pageName=ArticleContent</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l1 level2 lfo1; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->In
general routers are now performs rudimentary current density estimation on
wires and handles IR/RM.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>