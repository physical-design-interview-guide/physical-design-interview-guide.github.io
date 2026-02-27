---
title: "How do you create a voltage area in floorplan? What is the difference between a voltage domain and a power domain?"
date: 2025-08-20
draft: false
categories: ["Power-Plan"]
description: ""
---

<p><span style="font-family: &quot;Courier New&quot;; text-indent: -18pt;">o<span style="font-family: &quot;Times New Roman&quot;; font-feature-settings: normal; font-kerning: auto; font-optical-sizing: auto; font-size-adjust: none; font-size: 7pt; font-stretch: normal; font-variant-alternates: normal; font-variant-east-asian: normal; font-variant-emoji: normal; font-variant-numeric: normal; font-variant-position: normal; font-variation-settings: normal; line-height: normal;">&nbsp;&nbsp; </span></span><b style="text-indent: -18pt;">Creating
a Voltage Area (Physical Implementation):</b><span style="text-indent: -18pt;"> A voltage area is a </span><i style="text-indent: -18pt;">physical
region</i><span style="text-indent: -18pt;"> on the chip floorplan designated to contain logic operating at a
specific voltage level different from other regions, or logic that can be
power-gated:</span></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Define
the physical boundary (coordinates) of the region- create_voltage_area<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->Associate
this region with a specific power domain defined in the UPF/CPF.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]-->cells
belonging to the corresponding power domain are placed within this physical
voltage area during placement.<o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 18.0pt; mso-list: l0 level1 lfo1; tab-stops: list 18.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Voltage
Domain vs. Power Domain:</b><o:p></o:p></p>

<p class="MsoNormal" style="margin-left: 54.0pt; mso-list: l0 level2 lfo2; tab-stops: list 54.0pt; text-indent: -18.0pt;"><!--[if !supportLists]--><span style="font-family: &quot;Courier New&quot;; font-size: 10.0pt; line-height: 107%; mso-bidi-font-size: 11.0pt; mso-fareast-font-family: &quot;Courier New&quot;;"><span style="mso-list: Ignore;">o<span style="font: 7.0pt &quot;Times New Roman&quot;;">&nbsp;&nbsp;&nbsp; </span></span></span><!--[endif]--><b>Power
Domain (PD):</b> A <i>logical</i> concept defined in UPF. It represents a
collection of instances (logic hierarchy) that share a common primary power and
ground supply network and potentially common power management characteristics
(e.g., can be switched off together). A PD defines the <i>scope</i> of power
management intent. Multiple power domains can exist even if they operate at the
<i>same</i> voltage level, especially if they have different power-gating
controls. (e.g., create_power_domain PD_CPU, create_power_domain PD_GPU).<o:p></o:p></p>

<p class="MsoNormal"><b>Voltage Domain:</b> set of power domains that operate at
the <i>same voltage level</i>. The primary supply nets associated with the
power domains within a voltage domain would connect to the same voltage source
(e.g., 0.9V). UPF defines power states and supply nets, implicitly grouping
domains by voltage<span lang="EN-GB" style="mso-ansi-language: EN-GB;"><o:p></o:p></span></p>