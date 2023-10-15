import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { PoemCard } from "./PoemCard";

import poem1 from "../assets/imgs/poemImg/poem1.png";
import poem2 from "../assets/imgs/poemImg/poem2.jpeg";
import poem3 from "../assets/imgs/poemImg/poem3.jpeg";
import poem4 from "../assets/imgs/poemImg/poem4.jpeg";
import poem5 from "../assets/imgs/poemImg/poem5.jpeg";
import poem6 from "../assets/imgs/poemImg/poem6.jpeg";

//import poemtxt from "../components/poemComp/poem1.txt";
import colorsharp2 from "../assets/imgs/color-sharp2.png";

export const PoemsColl = () => {
    const projects1 = [
        {
            title: "When faith teeters on the precipice of doubt",
            description: "This poem explores a moment of doubt and struggle as faith teeters on the edge. The narrator faces rejection, questions their self-worth, and experiences a sense of isolation. Tears are hidden, and self-awareness remains resolute. The impact of this dark Wednesday alters their essence, as they yearn for support and question their own strength amidst the mess they've woven.",
            poemImg: poem1,
            poemText: `In the depths of night, on a Wednesday dark,
            Laptop aglow, eyes wide, all rest in slumber,
            Awaiting a letter defining my worth,
            Or so I believed in that moment's embrace.

            Rejected? Yes, but not by my own heart,
            Accepted by none? By kin and friends? Nay,
            This journey, a solitary venture,
            Yet "solitary" implies a "me, myself, and I" sojourn,
            A path I despise, reluctant to tread.

            That dark Wednesday, faith trembled within me,
            Faith in all that surrounds, now fragile and frail,
            Fearing eyes would witness my tearful plight,
            Thus, I weep within a wardrobe's embrace,
            As constricted as my own self-love's domain.

            Ego, narcissism, delusions? None saved me,
            I plummeted...falling harder than perceived,
            Morning laughs? Yes, but solitary tears? Aye,
            "Dry eyes" becomes one of my many aliases,
            Though surely, I bear no resemblance to it.

            Faith teeters on the precipice of doubt,
            Self-awareness stands resolute and tall,
            Yet answers elude, life a tempestuous ride,
            That dark Wednesday alters my very essence,
            Unnoticed by others, fortunate or unfortunate?
            Yearning for a helping hand, met with blame,
            Shall my strength match the magnitude of the mess I've woven?`,
        },
        {
            title: "Substraction’s grip, A turning point",
            description: "This poem explores the narrator's experience of leaving a friend group and the subsequent transformation. They reflect on their worth, the fading echoes of laughter, and the tears that replace love. Amidst uncertainty, they realize the power of choice and embrace their individual path. The heart wavers between memories and rationality, leading to the understanding that they are not defined by others. Yesterday's heartbreak brings newfound freedom and the strength to stand with wisdom and resilience.",
            poemImg: poem2,
            poemText: `Yesterday, we stood as five, today, they're four,
            Subtraction's grip, a problem I can't ignore.
            
            Am I an enzyme, hastening exclusion's pace?
            Left pondering my worth, in this lonely space.
            
            Loud laughs reverberate from distant windows,
            Once a unique reaction, now only echoes.
            
            Yesterday, their love illuminated my darkest nights,
            But today, it's tears that break free, taking flight.
            
            Beneath the jargon, a simple truth prevails,
            To live today, despite the heart's wavering trails.
            
            With or without them, the choice is mine to make,
            Their absence won't define the path I undertake.
            
            Though my heart remains unsure, torn in two,
            My hedonistic memory whispers, 'There are others, too.'
            
            Yet my rational mind reminds, 'Others aren't distinct,
            Different characters, same story, I must succinct.'
            
            Two equations, divergent paths, but one common factor, 'me',
            Yesterday yielded heartbreak, but today, I'm free.
            
            For today is the day I embrace my power,
            Happiness to the four, and within me, it will flower.
            
            Today, I stand noble, righteous, and fair,
            Kindness replaced by wisdom, a new way to bear.
            
            Today, I shed the cloak of niceness, no longer mild,
            For today, I'm not just nice, but strong and wild.
            `,
        },
        {
            title: "Walking the extra miles for you",
            description: "A captivating poem that portrays unrequited love, resilience, and the profound connection between two individuals. It explores the narrator's unwavering commitment, the enduring presence of their beloved, and the belief in a shared destiny that transcends imagination. Through heartfelt verses, the poem captures the emotions of longing, hope, and the undeniable power of love.",
            poemImg: poem3,
            poemText: `Walking the extra miles for you,
            In the aftermath of our one-sided confessions,
            I feel the wind's punch upon my face,
            Like sea waters crashing relentlessly to shore.
            All seems to conspire against me,
            But in my mind, the scene is set "against us."
            
            In the darkest alleys, steadfast I remain,
            For our love is the last straw I cling to.
            They say memories fade away,
            But rest assured, you're etched within my heart.
            
            Fortunate am I to have someone to hold dear,
            Especially amidst the turmoil that surrounds.
            While many lovers dwell in dreamy tales,
            Our connection transcends mere imagination.
            You are my reality, my unwavering muse,
            The catalyst behind my self-imposed pause.
            
            Perhaps you may not perceive it yet,
            But, my love, I am the director, albeit silently.
            And it was always meant to be...
            
            Somehow you belong with me,
            Somehow our fates intertwine,
            This truth resonates, undeniable and divine.
            `,
        },
        {
            title: "Whispers of Grief, Resilience, and Donuts",
            description: "This poem recounts the narrator's experience of losing their grandmother and the subsequent impact on their life. The news of her passing brings tears and sorrow. Despite the dual existence of laughter and tears, they find strength to rise again in the morning light. The absence of their grandmother lingers, but they cherish life's stages and embrace a hopeful future.",
            poemImg: poem4,
            poemText: `The sound of eye drops, a mournful chime,
            Doors bouncing, shaking me from dreamtime,
            "She's gone," said my mom, voice heavy with woe,
            Tears like a tsunami, cascading in sorrow.
            
            My sister, unmoved, returned to her sleep,
            But I, compelled, rose from bed to weep,
            Beside my mother, a solace to find,
            In this moment of loss, hearts intertwined.
            
            Before the ICU, where life hung by a thread,
            Grandma, a stranger to hospitals, softly said,
            "Water..." she murmured, her voice so frail,
            I smiled, offering support, easing her travail.
            
            Once the chef of our humble abode,
            Her Koshary, a feast, a tradition bestowed,
            But cancer's cruel grip stole her breath,
            Sweet smiles vanishing, lost in the depths.
            
            Twice grief struck, a double-edged blow,
            Aunt lost to COVID, then grandma's woe,
            We adapted swiftly, my family and I,
            For my young siblings, it fell on me to try.
            
            The bond with my grandma severed, untied,
            Once we cooked together, dreams amplified,
            But now she's gone, forever out of sight,
            
            Supporting my kin, I ventured to learn,
            Cooking new dishes, their appetite to discern,
            Donuts made with love, warming their hearts,
            Yet nightfall brought tears, depression's dark arts.
            
            Laughing, cooking, night cry-cravings, a dual existence I bore,
            A hypocrite to some, but I saw more,
            A sun that gives all, then seeks solace at night,
            To rise again, radiant, in morning's first light.
            
            As I tread this path, my grandma's absence near,
            The puzzle incomplete, snippets unclear,
            Yet I cherish life's stages, every rise and fall,
            Acceptance dawns, prayers for her above all.
            
            Warm hugs embrace me, exclamations of awe,
            In listening, my support finds its core,
            Through their eyes, I discover my way,
            A multitude of problems, donuts pave the way.
            
            When eye drops fall, a reminder profound,
            To pray for my grandma, her presence around,
            Making healthier choices, embracing the light,
            For a tomorrow that's cheerful, a future so bright.
            `,
        },
        {
            title: "Your smile, and other unfinished echoes",
            description: "This poem explores the conflicting emotions, memories, and reflections of the narrator as they navigate a relationship that remains unresolved. Through evocative imagery and heartfelt verses, the poem hints at the longing, confusion, and growth experienced by the narrator. It invites readers to ponder the untold story and the transformative power of embracing life's uncertainties.",
            poemImg: poem5,
            poemText: `Your smile, a world of its own,
            Etched in my mind, though love's unknown.
            I don't adore you, perhaps even disdain,
            Yet a "Good morning" text, I couldn't refrain.
            
            Waiting, phone in hand, for your reply,
            Not because I like you, just my screentime high.
            You texted, "Can't wait to see you!"
            My response, "Not for me, adieu."
            
            Blushes on my cheeks, I won't admit,
            Remembering every interaction, just a fleeting fit.
            Why am I mad we don't talk anymore?
            Confusion lingers, chances gone, I deplore.
            
            “Ghosting”, it’s how others call what I did
            I protected our souls, hearts, innocence
            Severing connections we once held dear,
            Hating how much you made me veer.
            For we were just kids when love arose,
            A long path awaits, uncertainties impose.
            
            Now I ponder, have I lost you forever?
            Darling, we were perfect, a bond severed.
            You, sunshine, and I, midnight rain,
            A tale unfinished, our hearts in refrain.
            
            But through the haze of tangled thoughts and strife,
            I've learned the value of embracing life.
            No longer dwelling on what could have been,
            I'll find solace in the journey, grow from within.
            
            For love's path is winding, with twists and turns,
            And sometimes, bridges built, they have to burn.
            Though we were perfect in our own unique way,
            New chapters await, new dawns and brighter days.
            
            I release the grip of longing, let it fly,
            Seeking strength in the depths of my own sky.
            Our story, unfinished, yet I'll hold no disdain,
            For it shaped me, taught me, through joy and pain.
            
            And should our paths cross again, someday,
            I'll greet you with a smile, no bitterness to convey.
            For I've discovered the beauty of letting go,
            And in that, my heart finds the strength to grow.
            `,
        },
        {
            title: "Heartless me can never be broken",
            description: "This poem delves into the depths of a survivor's journey, where resilience triumphs over wild abuse. This poignant and evocative poem unveils the raw emotions of a became-a-heartless fighter, as they navigate a turbulent past and find empowerment within. With vivid imagery and a captivating narrative, it unveils a tale of strength, forgiveness, and the transformative power of reclaiming one's self-worth. Prepare to be moved by the indomitable spirit that emerges from the ashes of pain, as the echoes of a survivor's story resonate long after the final verse.",
            poemImg: poem6,
            poemText: `Heartless me could never be broken,
            Even as a child, your screams were spoken.
            Powerless and trembling, I felt the fear,
            You showed no care, no compassion near.
            
            At five years old, innocence was shattered,
            My favorite doll destroyed, dreams left tattered.
            Confusion followed, the reasons unclear,
            But I blamed myself, drowning in self-reproach and tears.
            
            The cycle repeated at twelve, pain endured,
            I broke a cup, punishment ensured.
            Mocking my worth, scars left to bear,
            Sarcastic acceptance, as if I deserved the snare.
            
            Eighteen arrived, I changed, you remained the same,
            Warnings unheeded, my wild spirit aflame.
            Attempts to show you my inner strife,
            But you turned a deaf ear to my cries for life.
            
            You demanded my apology, for what I never did,
            Yet, I forgive you, not for you, but to lift the lid.
            A fresh start, a newfound strength I embrace,
            Thank you, in a twisted way, for finding my own grace.
            
            In that final scream, face to face we stood,
            Enemies locked in a battle no longer misunderstood.
            I refused to mirror your anger and disdain,
            Unlike you, I never raised my hand, causing pain.
            
            I no longer seek validation in your eyes,
            Once filled with love, now veiled by ego's guise.
            I respect myself, I love myself true,
            The heartless fighter you made, it's for you too.
            
            You thought I'd be shattered, broken apart,
            But I stand tall, unyielding, from my heart.
            I gave you love beyond what you deserved,
            Now, I'm free from the hurt you observed.
            
            This heartless version, unbreakable, it's true,
            And I know you took pleasure in seeing me blue.
            But I rise above, stronger than before,
            No longer defined by your abusive score.
            `,
        }
    ];
    return (
        <section className="project" id="poems">
            <Container>
                <Row>
                    <Col>
                        <h2>Writing, igniting the soul's symphony</h2>
                        <p><br/> "We write to taste life twice, in the moment and in retrospect." <br/><br/>--Anaïs Nin</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                <Nav.Link eventKey="poems">Poems</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="poems">
                                    <Row>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <PoemCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorsharp2} alt="bg"/>
        </section>
    )
}