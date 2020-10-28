# Samples for gulp-tron
Collection of samples of uing gulp-tron. You can start learning gulp-tron by examining build.config.js file of each sample directories. This file is equivalent to gulpfile.js of each projects.


## Project configuration
Main gulpfile in the root directory loads all the gulpfiles from each sample directories. Each samples can be considered to be a sub-project which can compete independent gulpfile.


## Running individual samples
Inside of each sample directory, run this command
```sh
cd samples/<sample-project-name>    # change directory to sample project directory
npm init                    # creat package.json file
npm i gulp gulp-tron -D     # install gulp and gulp-tron
npx gulp --tasks            # list up gulp tasks to see what tasks are available
npx gulp <task-name>        # run one of tasks from the task list above
```


<br><br>
<p align="center">
  <img class="logo" src="gulp-tron.svg" width="64px">
  <p align=center>Copyright &copy; 2020, under <a href="./LICENSE">MIT</a></p>
</div>
