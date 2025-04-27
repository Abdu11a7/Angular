import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber',
})
export class ToNumberPipe implements PipeTransform {
  transform(value: unknown): number {
    // التأكد من أن القيمة هي نصية قبل محاولة التحويل
    if (typeof value === 'string') {
      const num = parseInt(value, 10); // تحويل النص من hexadecimal إلى رقم عشري
      return isNaN(num) ? 0 : num; // إرجاع 0 في حال كان غير قابل للتحويل
    }
    return 0; // إرجاع 0 في حال كانت القيمة غير نصية
  }
}
