---
title: "Do we need to do DFM (Design for Manufacturability)? How is DFM introduced in the tech file?"
date: 2025-08-21
draft: false
categories: ["General-Concepts"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><b style="text-indent: -18pt;">Do We Need DFM?</b><span style="text-indent: -18pt;"> </span><b style="text-indent: -18pt;">- YES</b></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>DFM (Design for Manufacturability):</b> A set
of design methodologies and practices aimed at creating layouts that are not
only DRC-clean but are also robust against normal manufacturing process
variations, leading to higher yield. DFM often deals with "preferred"
or "recommended" configurations that are known to be more robust.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>How DFM is Introduced in the Tech File:</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Redundant via insertion – Double cut vias and
via enclosers defined in tech lef<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Antenna rules defined in tech file.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->EM: tech lef/file can define basic current
density rules.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Min and max area of shape.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://www.design-reuse.com/article/60101-design-for-manufacturability-an-overview/">design-for-manufacturability</a><o:p></o:p></p>