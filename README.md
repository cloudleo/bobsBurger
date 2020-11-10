# Bob's Burger of the Day (BOTD)

video of the project [https://drive.google.com/file/d/1OQiCGFBkeBdbdd3VeTlLxxSgXqYOvAfz/view?usp=sharing]

Created a simple app that will help Bob collect new `Burger of the Day` ideas. Then he and anyone with access to the site will be able to vote on the BOTD ideas with either a simple `upvote` or `downvote`. We don't care how many times they vote.

When Bob & team likes a BOTD idea, double clicking the BOTD `card` should update the record in the `API` as approved and change the display text to green.


Starting the `BOTD App` is easy:

```
npm install
npm start
```

Starting the App will kick off two processes: the React App and a simple API. The API is powered by [json-server](https://github.com/typicode/json-server). You can refer to `json-server`'s documentation for updating, deleting and creating records. 

Make sure that your `app` persists new burgers and votes to the `API`.

**The webserver can be found at:**

- [http://localhost:3000](http://localhost:3000)

**The API endpoint can be found at:**

- [http://localhost:3001/burgers](http://localhost:3001/burgers)
