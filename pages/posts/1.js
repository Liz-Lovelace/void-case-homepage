import Head from 'next/head';
import PostBody from '../../components/post/PostBody';
import MainTitle from '../../components/post/MainTitle';
import P from '../../components/post/P';
import DiskList from '../../components/post/DiskList';
import SizedImage from '../../components/post/SizedImage';
import Guide from '../../components/post/Guide';
import SideNote from '../../components/post/SideNote';
import Image from 'next/image';
import styles from '../../components/post/Post.module.css';

export default function Post(){
  return <div className={styles.post}>
    <Head>  
      <title> SPEED</title>
    </Head>
    <MainTitle> I love this hotkey and so will you </MainTitle>
    <Guide />
    <PostBody>
      <P>
        If you don't know how to touch-type, you can<SideNote /> safely skip this post and <i>go learn touch-typing instead.</i>
      </P>
      <SizedImage text="Programming isn't linear" src="/1/WritingCodeWritingBook.webm"/>
      <P>
        See the difference?<SideNote>When we write a book, we do it in a continuous stream, but when we write code</SideNote> When we write a book, we do it in a continuous stream, but when we write code,<SideNote /><SideNote /> we jump around and change little bits of it in different places.
      </P>
      <SizedImage text="What a wonderful cat" width = "2560" height="1600" src="/1/cat-grass-lie-down-striped-wallpaper.jpg" alt="Cat"  />
      <P>
        The problem is, changing between typing-mode and cursor-moving-mode takes <i>time</i>. How much time?
      </P>
      <P>
        This sucks. And there's a simple solution. Instead of moving your hands to and from the arrow keys, just remap the cursor movement to alt + your home row:
      </P>
      <P>
        Remap the following keys: <br/>
        Alt + j = [left arrow] <br/>
        Alt + k = [down arrow] <br/>
        Alt + l = [up arrow] <br/>
        Alt + ; = [right arrow]
      </P>
      <P>
        MORE SPEED
      </P>
      <P>
        We can make our navigation and selection even more efficient by binding the following keys:
      </P>
      <P>
        Alt + u = [home]
        Alt + i = word left
        Alt + o = word right
        Alt + p = [end]
      </P>
      <P>
        End goes to the end of the line and toggleHome goes to the beginning of the text in your line, and if you press it again - to the beginning of the line
      </P>
      <P>
      </P>
      <P>
      </P>
      <P>
      </P>
      <P>
      </P>
    </PostBody>
  </div>
}

/*



+----------------+--------------+
| writing a book | writing code |
|   [video]      |   [video]    |
+----------------+--------------+

>>>
>>>            writing a book  writing code
>>>    vscode  maybe?          ok
>>>
>>>    word    ok              what?
>>>



[A video showing how long moving your hands between the home row and arrow keys takes]

[picture showing the layout on a keyboard]

Here it is in action:

[Video showing the superior navigation method]

You should also remap Shift + Alt + jkl; to select text with this method.


[video showing how home and end work]

(Also bind shift+alt+ all of these to selectHome, selectWordRight, etc.)

Here's the final result:

[Video showing the ultimate typing technique]

And now using anything that doesn't allow you to remap the arrow keys feels like this:
[funny video?]
*/