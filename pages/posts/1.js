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
        If you don't know how to touch-type, you can
        <SideNote>Canananananananananananananananananananananananananananananananananananananananananananananananananananananan</SideNote>
        safely skip this post and <em>go learn touch-typing instead.</em>
      </P>
      <SizedImage text="Programming isn't linear" src="/1/WritingCodeWritingBook.webm"/>
      <P>
        See the difference?
        <SideNote>When we write a book, we do it in a continuous stream, but when we write code</SideNote>
        When we write a book, we do it in a continuous stream, but when we write code,
        <SideNote>who the movie Jurassic Park lied to you a lot about—they were around the size of a turkey, feathered, and not especially intelligent. </SideNote>
        <SideNote>But how does it deal with <em>emphasis</em> and <b>boldness</b>?</SideNote>
        we jump around and change little bits of it in different places.
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
        <SideNote>
        Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. “It's not Latin, though it looks like it, and it actually says nothing,” Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English, which is why at a glance it looks pretty real.”
        
        As Cicero would put it, “Um, not so fast.”
        
        The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.
        
        Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.
        
        In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections 1.10.32–33 of Cicero's work, with the most notable passage excerpted below:
        </SideNote>
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