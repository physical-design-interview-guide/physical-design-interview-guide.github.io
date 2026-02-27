---
title: "How do you approach AOCV in your design? What kind of library do you need for AOCV?"
date: 2025-08-19
draft: false
categories: ["General-Concepts"]
description: ""
---

<p>&nbsp;<b style="text-indent: 18pt;">Enable AOCV
Mode:</b><span style="text-indent: 18pt;"> Set the appropriate variables/commands in the STA tool (e.g.,
PrimeTime, Tempus)</span></p><p><b>Specify AOCV Files:</b> Ensure
the tool points to the necessary AOCV library files (often provided as separate
.aocv files or tables within the .lib).</p><p><b>Select Analysis Mode:</b>
Choose between 'clock only' or 'clock and data' modes. 'Clock only' applies
AOCV derates just to clock paths for faster runtime, while 'clock and data'
applies them to both for higher accuracy.</p><p><b style="text-indent: 18pt;">Library
Requirements:</b><span style="text-indent: 18pt;"> You need libraries specifically characterized for AOCV. This
typically involves:</span></p><p><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; text-indent: -18pt;"><span style="mso-list: Ignore;"><span>&nbsp;&nbsp; &nbsp;</span>o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span></span><!--[endif]--><span style="text-indent: -18pt;">Standard
.lib timing libraries (NLDM or CCS).</span></p><p><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;; text-indent: -18pt;"><span style="mso-list: Ignore;"><span>&nbsp;&nbsp; &nbsp;</span>o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span></span><!--[endif]--><span style="text-indent: -18pt;">AOCV
Derating Tables: These contain the derate values indexed by path depth and/or
distance. They can be provided as</span></p><p><span style="font-family: &quot;Courier New&quot;; font-size: 10pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;; text-indent: -18pt;"><span style="mso-list: Ignore;"><span>&nbsp;&nbsp; &nbsp;</span>o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><span style="text-indent: -18pt;">Separate
side files (e.g., .aocv).</span></p><p><span style="font-family: &quot;Courier New&quot;; font-size: 10pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;; text-indent: -18pt;"><span style="mso-list: Ignore;"><span>&nbsp;&nbsp; &nbsp;</span>o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><span style="text-indent: -18pt;">Embedded
within the .lib file itself using specific syntax (though this became standard
later).</span></p>

<p class="MsoNormal" style="margin-left: 36pt; text-align: left;"><i>Further Reading:</i> Modeling
Variation: <a href="https://www.paripath.com/blog/variation-blog/modeling-variation-from-ocv-to-aocv">https://www.paripath.com/blog/variation-blog/modeling-variation-from-ocv-to-aocv</a><o:p></o:p></p>