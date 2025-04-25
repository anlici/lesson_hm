import React, { useState, useRef, useEffect } from 'react';

/**
 * 用一个数组记录列表项的高度。初始时
 * 
 */
const VirtualList = ({ items, renderItem, estimatedItemHeight }) => {
    const [itemHeights, setItemHeights] = useState([]);
    const containerRef = useRef(null);
    const startIdxRef = useRef(0);
    const endIdxRef = useRef(0);

    // 计算滚动位置对应的开始和结束索引
  const calculateVisibleRange = (scrollTop) => {
    let startIdx = 0;
    let endIdx = 0;
    let accumulatedHeight = 0;

    // 找到开始索引
    while (accumulatedHeight < scrollTop && startIdx < items.length) {
      accumulatedHeight += itemHeights[startIdx] || estimatedItemHeight;
      startIdx++;
    }

    // 找到结束索引
    const containerHeight = containerRef.current.clientHeight;
    while (accumulatedHeight < scrollTop + containerHeight && endIdx < items.length) {
      accumulatedHeight += itemHeights[endIdx] || estimatedItemHeight;
      endIdx++;
    }

    return { startIdx, endIdx };
  };

}