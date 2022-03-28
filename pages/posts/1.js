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
      <title> BlogName </title>
    </Head>
    <MainTitle> I love this hotkey and so will you </MainTitle>
    <Guide />
    <PostBody>
      <P>
        If you don't know how to touch-type, you can safely skip this post and <em>go learn touch-typing instead.</em>
      </P>
      <SizedImage src="/1/WritingCodeWritingBook.webm" width="1920" height="1080">
        Programming isn't linear
      </SizedImage>
      <P>
        See the difference? When we write a book, we do it in a continuous stream, but when we write code, we jump around and change little bits of it in different places.
      </P>
      <P> 
        The problem is, changing between typing-mode and cursor-moving-mode takes <i>time</i>.
      </P>
      <P>
        <strong> Can we go faster? </strong>
      </P>
      <P>
        This sucks. And there's a simple solution. Instead of moving your hands to and from the arrow keys, just remap the cursor movement to alt + your home row:
      </P>
      <SizedImage alt="arrow keys placed on jkl;" width="1920" height="1080" src="/1/idk.jpg"> 
        Your new arrow keys
        <SideNote n="1">
          <p><em>But why are k and l bound to up and down and not vice versa?</em></p>
          <p>Well, way back in the 70's Bill Joy created the <em> vi </em> text editor. His ADM-3A terminal (computer) had arrows printed on the keys in the same arrangement as we just bound, but moved one key to the left. so <em> hjkl </em> was left-down-up-right. But it's better for us to put them on jkl; so that our fingers stay on the home row. </p>
          <p><em> But why did the ADM-3A terminal (computer) have the keys there in the first place? </em></p>
          <p> It didn't have arrow keys, so they just put the keys on hjkl and sent the arrow keycodes if you pressed those buttons while holding CTRL.</p>
        </SideNote>
      </SizedImage>
      <P>
        Remap the following keys: <br/>
        Alt + j = [left arrow] <br/>
        Alt + k = [down arrow] <br/>
        Alt + l = [up arrow] <br/>
        Alt + ; = [right arrow] <br/>
        <br/>
        Alt + Shift + j = [select left arrow] <br/>
        Alt + Shift + k = [select down arrow] <br/>
        Alt + Shift + l = [select up arrow] <br/>
        Alt + Shift + ; = [select right arrow]
      </P>
      <P>
        Getting used to moving your cursor down with K and up with L will take some getting used to, but it's worth it. After a few days you'll get the hang of it and soon enough it'll become second nature. To get better fast I can personally recommend playing some top-down game with jkl; instead of WASD. I can personally recommend <em> Crypt of the NecroDancer </em> for this.
      </P>
      <P>
        <strong> But can we go even faster? </strong>
      </P>
      <P>
        We can make our navigation and selection even more efficient by binding the following keys:
      </P>
      <P>
        Alt + u = [home] <br />
        Alt + i = word left <br />
        Alt + o = word right <br />
        Alt + p = [end] <br />
        <br />
        Alt + Shift + u = select [home] <br />
        Alt + Shift + i = select word left <br />
        Alt + Shift + o = select word right <br />
        Alt + Shift + p = select [end]
      </P>
      <P>
        Here it is in action:
      </P>
      <SizedImage width="1920" height="1080" src="/1/idk2.jpg"> 
        Now that's complete control.
      </SizedImage>
      <SizedImage src="/1/SuperiorMethod.webm" width="1920" height="1080">
        Ahh, how nice
      </SizedImage>
      <P>
      </P>
      <P>
        ending?
      </P>
    </PostBody>
  </div>
}

/*

[A video showing how long moving your hands between the home row and arrow keys takes]


And now using anything that doesn't allow you to remap the arrow keys feels like this:
[funny video?]
*/