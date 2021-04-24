## Node JS

- Node JS is open-source Javascript Runtime Environment.
- It has MIT license
- It runs on V8 engine which isused in chrome browser
- Released in 2009

### Formal definition
    Node Js is single-threaded, event-driven,non-blocking I/O driven, asynchronous,  run time environment built on top of V8 engine.

    Sounds overwhelming🙄? Let me explain you in simple terms.

#### Single threaded:
    It means Node JS app runs in a single process. It can be treated as a single lane on a road.

#### Event-driven
    Events are actions/triggers(mouse clicks,key press) which has to be responded to. 
    For example, when mobile rings, you understand that there is an incoming call and you eventually respond to it. So here mobile ringtone was the event.

#### Non-blocking I/O driven
    An analogy can be a waiter at restaurant. A waiter takes an order and informs tochef to prepare food. Also he never waits until the food is cooked and delivered to previous order,but he is free to take second order from another customer in the meantime. The waiter is not blocked and he is taking Input from customer and while that input is being processed, he is taking other input(asynchronous). When the output i.e, food is ready, he deilvers to the table.

#### Some real-time examples to understand the above terms

- Bank queue: Here there is a queue and one request is handled at a time from the bank official at the counter. So the person standing behind the first person in the queue is 'blocked' and there is waiting time.

- Tea seller shop - Here usually queues are not found. Tea seller receives large requests and prepares the tea and serves it. Here even if more people arrive, he can take requests and deliver them. He is 'not blocked' from taking additional requests until he runs out of tea making ingridients.

- Highway - Here we can find different lanes based on the capacity of vehicles - heavy vehicles, two-wheelers, four-wheelers. That means there are different lanes but vehicles can switch between the lanes - 'multi threaded' which may reduce the speed if lane is switched by other vehicles.

- Railway track - Best analogy for single thread. At a time, one train can run on the track in high speed.

- E-commerce/online shopping - Whenever any item is ordered online, we shall not wait until order is delivered as we proceed to do other tasks - 'Non-blocking, asynchronous'.

- Shopping mall/Traffic Signal - Perfect example of blocking. In shopping mall, until we buy an item, we can not do other tasks unlike online shopping. Same applies to traffic signal, until the signal clears, we are stranded at same place.

#### `Event loop`
-   Node JS is single threaded but we have something called event loop which helps in performing non-blocking operations.
-   Every application runs on event loop. It can be imagined as while loop in other programming languages.
- Example : Earth runs in an event loop which has different phases like morning, noon, afternoon, evening, night and it repeats daily.
- Similarly, event loop has 6 phases - `Macros`

    - `Timers`: Executes callbacks which are scheduled by timers. 
    
        example: Warming food in microwave oven for certain minutes.
    - `Pending callbacks`: Any action/callbacks which are pending for example, broken wire of the microwave oven is fixed so that it can be used with safety.
    - `Idle`: Here next actions to be done is planned.
    - `Poll`: All new I/O events are executed here. Example: Daily routines.
    - `Check`: immediate callbacks which are important and in emergency are performed here. Example: Buying groceries to prepare food.
    - `Close callbacks`: All callbacks are closed here.

- `nextTick` - It is not a part of event loop. Next event loop phases start from here.sss





