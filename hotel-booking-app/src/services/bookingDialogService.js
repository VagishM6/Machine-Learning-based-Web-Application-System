import { BehaviorSubject } from 'rxjs';

// creating a room booking pop-up component for booking services using rxjs 

const events$ = new BehaviorSubject({ open: false });

const bookingDialogService = {
    open: (home) => events$.next({ open: true, home }),
    close: (home) => events$.next({ open: false, home: null}),
    events$: events$.asObservable(),
};

export default bookingDialogService;