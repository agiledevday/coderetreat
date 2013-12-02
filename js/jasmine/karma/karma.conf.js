module.exports = function (config) {
    config.set({

            files: [
                '*.js',
                '*Spec.js'
            ],

            browsers: ['PhantomJS'],
            frameworks: ["jasmine"],

            autoWatch: true,
            singleRun: false

        }
    )
}
;
