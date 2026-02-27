---
title: "What are clock gating checks? Why do we do them?"
date: 2025-08-23
draft: false
categories: ["CTS"]
description: ""
---

<p></p><p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Clock
Gating Checks:</b> setup and hold timing checks applied to the enable signal of
Integrated Clock Gating (ICG) cells.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt;"><br /></p><p class="MsoNormal" style="margin-left: 18.0pt;"><o:p></o:p></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEhQY7KFXDR-LSGgcJOlvPlm3wOxReMhOMDhdJKGZs64D7YMO61taapBmYcExWxMlSpi7HCaoYBBqu3Dj2OijhC4o8ZtW54EUA9xuOokgEvz_g3AogeOFO1-_LJ_QGd4t1EZwsaYtlRqKjT2kh-_AZsS3TW0H18k0nas_bTLWlXxGN6EcI4YVGsvwJuBbiyR" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="506" data-original-width="958" height="338" src="https://blogger.googleusercontent.com/img/a/AVvXsEhQY7KFXDR-LSGgcJOlvPlm3wOxReMhOMDhdJKGZs64D7YMO61taapBmYcExWxMlSpi7HCaoYBBqu3Dj2OijhC4o8ZtW54EUA9xuOokgEvz_g3AogeOFO1-_LJ_QGd4t1EZwsaYtlRqKjT2kh-_AZsS3TW0H18k0nas_bTLWlXxGN6EcI4YVGsvwJuBbiyR=w640-h338" width="640" /></a></div><br /><p></p>

<p class="MsoNormal" style="margin-left: 18.0pt;"></p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEhNgAmQ2vFDq59Why3rlrs8o5qh6zfkpQDzIyp9e5UcEbuEbfT0D34KMpfBTKqLLYx5GbUlJwyNnjdluFto6xsqZPjmhGd3guLXLraLOwo8C63CZydlY7uZ13S1KtOWAGzLveA2F9xuHZ2gr2-Mv-9EJRN4A3U-zlW31eVClqs3QAclgJdF7qrNLUfd6vBR" style="margin-left: 1em; margin-right: 1em;"><img alt="" data-original-height="516" data-original-width="940" height="352" src="https://blogger.googleusercontent.com/img/a/AVvXsEhNgAmQ2vFDq59Why3rlrs8o5qh6zfkpQDzIyp9e5UcEbuEbfT0D34KMpfBTKqLLYx5GbUlJwyNnjdluFto6xsqZPjmhGd3guLXLraLOwo8C63CZydlY7uZ13S1KtOWAGzLveA2F9xuHZ2gr2-Mv-9EJRN4A3U-zlW31eVClqs3QAclgJdF7qrNLUfd6vBR=w640-h352" width="640" /></a></div><br /><br /><p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Prevent
Glitches:</b> The primary reason is to ensure the output of the ICG cell (the
gated clock) is clean and free from glitches or runt pulses. Glitches can cause
flip-flops downstream to capture incorrect data or enter metastable states.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Reliable
Low Power:</b> Ensuring the checks pass guarantees the gating works reliably,
achieving the intended power reduction without causing functional errors.</p><p class="MsoNormal" style="margin-left: 54.15pt; mso-list: l0 level2 lfo1; tab-stops: list 54.15pt; text-indent: -18.0pt;"><a href="https://www.youtube.com/watch?v=hbVEyQg7ImA&amp;ab_channel=VLSIExcellence%E2%80%93GyanChandDhaka" target="_blank">Understanding clock gating</a><br /></p>

<p class="MsoNormal"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p><br /><p></p>