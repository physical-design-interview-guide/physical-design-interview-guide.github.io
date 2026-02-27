---
title: "What is Antenna Effect? How to solve antenna violations?"
date: 2025-08-21
draft: false
categories: ["Physical-Verification"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -17.85pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -17.85pt;">Antenna
Effect (Plasma-Induced Gate Oxide Damage):</b><span style="text-indent: -17.85pt;"> During semiconductor
manufacturing, plasma etching processes are used to remove material. In these
processes, charged particles (ions, electrons) bombard the wafer surface. If a
long metal wire (acting like an "antenna") connected only to a transistor
gate is exposed during etching, it can accumulate significant charge from the
plasma. If this charge builds up enough voltage, it can exceed the breakdown
voltage of the thin gate oxide layer beneath the transistor gate, causing
damage (latent defects or immediate breakdown). This damage can lead to
reliability issues or functional failure. The risk increases with the Increase
in metal area compared to gate area. Which is called antenna ration.</span></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 18.15pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Solving Antenna Violations:</b> Violations
are flagged when the calculated antenna ratio exceeds limits defined in the
foundry's antenna rule deck. Fixes involve either reducing the charge
accumulation during processing or providing a safe discharge path.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Metal Layer Hopping (Jumper Insertion):</b>
Break the long lower-layer metal wire near the gate connection and insert a
"jumper" using higher metal layers (which are processed later).
Reduces metal area at that particular layer.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Diode Insertion:</b> Place a small protection
diode (typically a reverse-biased N+/P-sub or P+/N-well diode) connected to the
vulnerable net near the receiver gate. This diode provides a low-impedance path
for the accumulated charge to leak safely to the substrate (ground/power)
before the voltage reaches the gate oxide breakdown level.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 54.15pt; mso-add-space: auto; mso-list: l1 level1 lfo2; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>(Less Common) Driver Sizing:</b> Using a
larger driver cell might sometimes help if its larger source/drain diffusion
area provides a more effective (though non-ideal) discharge path during
processing, but this is not a primary fix method.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: -17.85pt;"><span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p>&nbsp;</o:p></span></p>