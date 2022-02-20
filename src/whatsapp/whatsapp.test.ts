import { SessionWhats } from '.';

const whatsApp = new SessionWhats({
   session: 'session-test',
   multidevice: true,
});

describe('whatsapp Test', () => {
   it('should client up', () => {
      expect(whatsApp.up).toBeFalsy();
   });

   it('should not sendMessage', () => {
      expect(whatsApp.sendMessage({ contact: '213', text: '123' })).toBeFalsy();
   });
});
