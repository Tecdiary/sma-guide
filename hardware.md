---
title: Hardware Guide for Stock Manager Advance
head:
  - - meta
    - name: description
      content: We have developed and test the application with following hardware.
  - - meta
    - name: keywords
      content: Supported Receipt Printers, Barcode Scanners, Card Readers, Cash Drawers
---

# Hardware

We have developed and test the application with following hardware.

## Receipt Printers

We have tested the application with Bixolon SRP-350II (USB) and Xprinter XP-Q200II (LAN
Interface).

**Compatibility: Interfaces and operating systems**

The package used is known to work with the following OS/interface combinations:

|                 | Linux |    Mac     | Windows |
| :-------------- | :---: | :--------: | :-----: |
| **Ethernet**    |  Yes  |    Yes     |   Yes   |
| **USB**         |  Yes  | Not tested |   Yes   |
| **USB-serial**  |  Yes  |    Yes     |   Yes   |
| **Serial**      |  Yes  |    Yes     |   Yes   |
| **Parallel**    |  Yes  | Not tested |   Yes   |
| **SMB shared**  |  Yes  |     No     |   Yes   |
| **CUPS hosted** |  Yes  |    Yes     |   No    |

SMA has 2 printing options

1. Print using Browser (most printer support this printing option)
2. Print using POS Print Server (for Raw prints with out browser dialog)

Bixolon printers will work fine however you might need to change some commands for
other printers. Please be informed that we can't provide support regarding any issues.
You will need to manage it by yourself.

## Barcode Scanners/Readers

Any of the barcode scanners/readers will work fine if it can read accurately.

## Magnetic Card Readers

Most of the Magnetic Card Readers will work fine. We have tested this with Uniform
MSR213 Magnetic Stripe Card Reader (USB - 3 Track Reader).

## Cash Drawers

You should buy the cash drawers that can be connected to pos printer. To use cash drawers,
you printer should have the port to connect cash drawer as Bixolon SRP350II and Xprinter
XP-Q200II.

For Browser Print, you might need to set your printer to open cash drawer before printing.
For Others, it will be fine as cash drawer will be opened with printing and can be opened
without printing.

## For barcode and label printing

Any desktop laser print will work fine for barcode printing. The continuous feed should work with
label printer but the design is very simple. If you need, you can customize template as you like or hire any developer to help you get desired results.
