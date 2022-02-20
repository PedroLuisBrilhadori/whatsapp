import { SessionWhats } from '.';

describe('whatsapp not connect', () => {
   const whatsApp = new SessionWhats({
      session: 'session-test',
      multidevice: true,
   });

   it('should client is not up', () => {
      expect(whatsApp.up).toBeFalsy();
   });

   it('should not sendMessage', () => {
      expect(whatsApp.sendMessage({ contact: '213', text: '123' })).toBeFalsy();
   });
});
