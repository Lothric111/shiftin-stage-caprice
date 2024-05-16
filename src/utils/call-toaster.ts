import toast, { Toast, ToastOptions } from 'react-hot-toast';

export const CallToaster = ({ message, options }: { message: string, options: ToastOptions }) => toast(message, options)