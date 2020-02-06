# stylus-workplace

a project using gulp that makes it easy to generate css classes using stylus. generates both dev and prod css files.


## Steps
   
   - clone the repo
   - run **npm install --global gulp-cli**
   - run **npm install**
   - run **gulp** or **npm run start**
   - you can change **stylus/** contents now
   
   
## Test
   
   - requires jest
   - run **npm test**
   
## Notes
   
> you can find dev css with sourcemaps in `./css`, prod compressed versions in `./compressed` and vendor prefixed prod compressed versions in `./vendor` (in most cases you should use `./vendor` files)

> uses gulp-cli v2 and gulp v4

> running the test will produce sample results that will replace your produced css

## Use cases

 you might use this as a playground to learn Stylus or as a tool to safely generate your css outside your projects.
   
