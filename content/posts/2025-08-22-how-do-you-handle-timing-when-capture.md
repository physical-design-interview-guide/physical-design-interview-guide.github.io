---
title: "How do you handle timing when the capture flop frequency is twice the launch flop frequency?"
date: 2025-08-22
draft: false
categories: ["STA"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;
</span></span><span style="text-indent: -18pt;">Tools calculate phase shift as explained below.
If same clock drives launch and capture, phase shift is equal to one clock
period.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Phase shift represents the delay adjustment
being used for the projection of the most restrictive non-zero delta time into
the first clock cycles of the unrolled clocks.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1Od0000000nVCuEAM&amp;pageName=ArticleContent">https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1Od0000000nVCuEAM&amp;pageName=ArticleContent</a><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1Od0000000nUvuEAE&amp;pageName=ArticleContent">https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1Od0000000nUvuEAE&amp;pageName=ArticleContent</a><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><a href="https://support.cadence.com/apex/ArticleAttachmentPortal?id=a1Od0000000nVA4EAM&amp;pageName=ArticleContent">Leading
edge info</a><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto;"></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEgkMLhwlMDuHsAcuI0q8PdK2gFArGJmqWqTXV4Auf3dT2cVbrVclqb8VMTjvb5mJIGB8ShBMJBYjIHQPHGt5u0jXqaeYe99FoqVkNzSumR493DhYjh3Yyo24DaJMGbjywdoao_zk1aoRJoMtJMgHDfSrVGKV7UGcl0RnSanqOMlp29kiSCB6m4NdSP1epie" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="628" data-original-width="940" height="384" src="https://blogger.googleusercontent.com/img/a/AVvXsEgkMLhwlMDuHsAcuI0q8PdK2gFArGJmqWqTXV4Auf3dT2cVbrVclqb8VMTjvb5mJIGB8ShBMJBYjIHQPHGt5u0jXqaeYe99FoqVkNzSumR493DhYjh3Yyo24DaJMGbjywdoao_zk1aoRJoMtJMgHDfSrVGKV7UGcl0RnSanqOMlp29kiSCB6m4NdSP1epie=w640-h384" width="640" /></a></div><br /><br /><p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Timing Analysis Approach:</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Phase shift = time period of capture clock in
this case.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->It may need MCP if required.<o:p></o:p></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>