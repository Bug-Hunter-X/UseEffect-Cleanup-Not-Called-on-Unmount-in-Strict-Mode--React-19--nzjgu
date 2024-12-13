# useEffect Cleanup Not Called on Unmount in Strict Mode (React 19)

This repository demonstrates a bug in React 19 where the cleanup function in `useEffect` is not consistently called when using Strict Mode. This can lead to memory leaks if the cleanup function is responsible for releasing resources.

## Problem

When using Strict Mode, the cleanup function within `useEffect` might not be called when the component unmounts. This behaviour is inconsistent and can lead to unexpected issues. 

## Solution

The provided solution demonstrates the correct implementation of `useEffect` that addresses this problem. The solution ensures consistent cleanup, even in Strict Mode, preventing potential memory leaks.

## Setup

1. Clone this repo
2. `npm install`
3. `npm start`