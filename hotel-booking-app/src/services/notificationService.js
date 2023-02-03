import { BehaviorSubject } from 'rxjs';

// creating a react component for a notification pop-up using rxjs after a room has been booked

const events$ = new BehaviorSubject({ open: false, home: null });

const notificationService = {

    open: (message) => events$.next({ open: true, message }),
    close: () => events$.next({ open: false, message: null }),
    events$: events$.asObservable(),
};

export default notificationService