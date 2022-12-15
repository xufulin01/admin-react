
/**
 * 考勤管理
 * 
 */
import React from "react";

export const Attendance = () => {
    // 有一个一维对象数组，根据field字段分组元素，实现方法groupBy(array,field)

    // 输入：
    const array = [
        {
            categoryId: 1,
            name: 'a',
        },
        {
            categoryId: 1,
            name: 'b',
        },
        {
            categoryId: 2,
            name: 'c'
        }
    ]
    const groupBy = (array, field) => {
        const obj = {}
        const newArr1 = array.map((item) => {
            return item[field]
        })
        const newArr2 = new Set([...newArr1])
        console.log('====================================');
        console.log(newArr2);
        console.log('====================================');
        newArr2.forEach(item => {
            const list = []
            array.forEach(temp => {
                if (temp[field] === item) {
                    list.push(temp)
                }
            })
            obj[item] = list
        })
        return obj
    }
    console.log('====================================');
    console.log(groupBy(array, "categoryId"));
    console.log('====================================');

    // 输出：
    // {
    // 	1:[
    //      {
    //       categoryId: 1,
    //       name: 'a',
    //     },
    //     {
    //       categoryId: 1,
    //       name: 'b',
    //     },
    //   ],
    //   2:[
    //      {
    //       categoryId: 2,
    // 	  	name: 'c'
    //   	}
    //   ]
    // } 
    return (
        <>Attendance   考勤管理</>
    );
};