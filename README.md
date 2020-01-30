# stylus-workplace

a project using gulp that makes it easy to generate css classes using stylus. generates both dev and prod css files.


## Steps
   
   - clone the repo
   - run **npm install**
   - run **gulp**
   - you can change **stylus/** contents now
   
> you can find dev css with sourcemaps in `./css` and prod compressed versions in `./compressed`
   
   
   
   ```mermaid
graph LR
A[stylus] -- gulp --> B((dev css))
B -- gulp --> C((prod css))
```
