/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType } from "react";

export interface ISidebarItems {
    title: string;
    items: {
        title: string;
        url: string;
        component: ComponentType;
    }[];
};

export type TRole = "ADMIN" | "SENDER" | "RECEIVER"


export interface IParcel {
    statusLogs: any;
    _id: string
    tracking_id: string
    type: string
    weight: number
    fee: number
    sender: {
        name: string
        email: string
        address: string
    }
    receiver: {
        name: string
        email: string
        address: string
    }
    senderPhone: string
    receiverPhone: string
    currentStatus: string
    createdAt: string
}