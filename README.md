# After-Hours Call Triage & Escalation System for HVAC Businesses

Serverless Twilio-based system that captures after-hours calls, records job details, performs emergency triage, and escalates urgent cases via SMS.

## Problem:
• HVAC businesses miss revenue after hours or get woken up for non-urgent calls.

## Solution

•Answers after-hours calls
•Records caller issue
•Classifies emergency via keypad input
•Sends structured SMS summary
•Escalates emergencies immediately

## Call Flow

1.Incoming call hits Twilio Function
2.Caller records issue
3.System asks emergency question
4.Logic routes to:
    •Emergency: SMS + escalation
    •Non-emergency: SMS only

## Tech Stack

•Twilio Voice (TwiML, Functions)
•Node.js
•Serverless architecture
•Environment-based configuration

## Design Decisions

•One service per client to reduce blast radius
•No database in v1 for reliability
•Explicit triage to avoid false emergencies

## What I Learned

•Event-driven serverless flows
•Telephony primitives
•Production-safe environment configuration
•Designing for real-world user behavior
