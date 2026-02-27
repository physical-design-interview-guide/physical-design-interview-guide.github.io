---
title: "How does crosstalk affect timing?"
date: 2025-08-21
draft: false
categories: ["Signal-Integrity"]
description: ""
---

<p>Crosstalk delay affects timing. This occurs when both the
aggressor net and the victim net are <b>switching simultaneously or within a
close timing window</b>.</p>

<p class="MsoListParagraphCxSpFirst" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Opposite Direction Switching:</b> If the
aggressor switches in the opposite direction to the victim (e.g., aggressor
rises 0-&gt;1 while victim falls 1-&gt;0), <b>the effect is increased delay on
the victim net.</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->The aggressor's transition effectively increases
the amount of charge the victim driver needs to supply/remove through the
coupling capacitance (Miller effect). This makes the victim's transition
slower.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Slower transition hurts setup timing but helps
hold timing.<o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 54.0pt; mso-add-space: auto; mso-list: l0 level1 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]--><b>Same Direction Switching:</b> If the
aggressor switches in the same direction as the victim (e.g., both rise
0-&gt;1), <b>the effect is decreased delay on the victim net.</b><o:p></o:p></p>

<p class="MsoListParagraphCxSpMiddle" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->The aggressor's transition helps
charge/discharge the coupling capacitance in the same direction the victim
driver is trying to go, so speeding up the victim's transition.<o:p></o:p></p>

<p class="MsoListParagraphCxSpLast" style="margin-left: 90.0pt; mso-add-space: auto; mso-list: l0 level2 lfo1; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;
</span></span></span><!--[endif]-->Faster transition helps setup timing but hurts hold
timing. This is often the worst-case scenario for hold analysis.<o:p></o:p></p>