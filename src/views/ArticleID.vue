<template>
  <div id="ArticleID">
      <article>
          <main id="mdToHTML"></main>
      </article>
  </div>
</template>

<script>
export default {
    mounted(){
         $(function() { 
                $.get("http://localhost:4000/file/md/js.md", function(markdown) {
                    
				    editormd.markdownToHTML("mdToHTML", {
                        markdown: markdown ,
                        emoji: true,
                    });
                });
            });
    }
}
</script>

<style lang="less" scoped>
#ArticleID{
    #mdToHTML{
        box-sizing: border-box;
    }
}
</style>