---
title: "What flow is followed for ECO / timing closure?"
date: 2025-08-21
draft: false
categories: ["ECO"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><span style="text-indent: -17.85pt;">After
post route database has acceptable timing and drc numbers, we start ECO phase.</span></p>

<p class="MsoListParagraph" style="margin-left: 17.85pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->If
power recovery is reuired, start with power recovery where tool downsize or VT swap
cells in timing paths with positive slack to save power.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 17.85pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Then
start fixing drv/setup/hold timing. Generate ECO file manually or from STA
tool, on single session or DMSA environment. Apply ECO on post route database
in PNR tool, save design and dump outputs and rerun timing, Physical
verification like DRC, LVS, Antenna, etc. IR EM analysis can be done.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 17.85pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->Iterate
ECO cycles till timing is clean. Once all ECOs are implemented and locally
verified, run full signoff checks (STA, DRC, LVS, EM/IR) on the final ECOed
database.<o:p></o:p></p>

<p class="MsoListParagraph" style="margin-left: 17.85pt; mso-list: l0 level1 lfo1; text-indent: -17.85pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]-->ECO
Flow: <a href="https://teamvlsi.com/2021/02/eco-flow-in-physical-design.html" target="_blank">https://teamvlsi.com/2021/02/eco-flow-in-physical-design.html</a><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>