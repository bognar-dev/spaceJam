import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Court } from "@/components/court"
import { Player } from "@/types/player"

const playersCast:Player[] = [
  {
    id:1,
    name: "Michael Jordan",
    role: "as himself",
    description:
      "appears as himself, makes his motion-picture feature debut with 'Space Jam.' Widely considered the greatest basketball player in history...",
    img: "jordan.jpg", // Replace with the actual URL
  },
  {
    id:2,
    name: "Bugs Bunny",
    role: "as himself",
    description:
      "received an Academy Award for his work in the 1958 theatrical short, 'Knighty-Knight Bugs,' and has been nominated for Oscars three more times...",
    img: "bugs.jpg", // Replace with the actual URL
  },
  {
    id:3,
    name: "Wayne Knight",
    role: "Stan Podolak",
    description:
      "is probably best known for his role in the blockbuster 'Jurassic Park,' as well as for his recurring part as Newman, Jerry Seinfeld's postal carrier neighbor on the hit NBC series 'Seinfeld.'...",
    img: "knight.jpg", // Replace with the actual URL
  },
  {
    id:4,
    name: "Theresa Randle",
    role: "Juanita",
    description:
      "(Juanita)'s list of credits spans feature films, television and the live stage...",
    img: "randle.jpg", // Replace with the actual URL
  },
  {
    id:5,
    name: "Danny DeVito",
    role: "voice of Swackhammer",
    description:
      "is one of the most diversely successful talents in Hollywood. An award-winning film, stage and television actor, as well as a writer, producer and director who has earned popular and critical acclaim...",
    img: "devito.jpg", // Replace with the actual URL
  },
];

const playersLoonieToons: Player[] = [
  {
    id: 6,
    name: "Bugs Bunny",
    role: "as himself",
    description: "The iconic Bugs Bunny, known for his wit and cleverness.",
    img: "c-bugssm.gif", // Replace with the actual URL
  },
  {
    id: 7,
    name: "Daffy Duck",
    role: "as himself",
    description: "The zany and eccentric Daffy Duck, always ready for a laugh.",
    img: "c-daffysm.gif", // Replace with the actual URL
  },
  {
    id: 10,
    name: "Porky Pig",
    role: "as himself",
    description: "The stuttering yet lovable Porky Pig, a classic character in the Looney Tunes lineup.",
    img: "c-porkysm.gif", // Replace with the actual URL
  },
  {
    id: 11,
    name: "Tweety Bird",
    role: "as himself",
    description: "The tiny but feisty Tweety Bird, always trying to outsmart his adversaries.",
    img: "c-slytweetysm.gif", // Replace with the actual URL
  },
  {
    id: 12,
    name: "Tazzie",
    role: "as himself",
    description: "Tazzie, also known as the Tasmanian Devil, is a whirlwind of chaos and appetite.",
    img: "c-tazsm.gif", // Replace with the actual URL
  },
  {
    id: 13,
    name: "Elmer Fudd",
    role: "as himself",
    description: "Elmer Fudd, the hapless hunter, is always on the trail of his elusive prey.",
    img: "c-elmersm.gif", // Replace with the actual URL
  },
  {
    id: 14,
    name: "Wile E. Coyote",
    role: "as himself",
    description: "Wile E. Coyote, the crafty predator, is forever chasing the elusive Road Runner.",
    img: "c-coyoterrsm.gif", // Replace with the actual URL
  },
  // Add more Loonie Toons characters as needed
];


const playersBadGuys: Player[] = [
  {
    id: 8,
    name: "Swackhammer",
    role: "The Villain",
    description: "The main antagonist, Swackhammer, the evil owner of the intergalactic theme park.",
    img: "swackhammer_bad_guys.jpg", // Replace with the actual URL
  },
  {
    id: 9,
    name: "Nerdlucks (Monstars)",
    role: "Minions",
    description: "The small alien Nerdlucks transformed into the powerful Monstars.",
    img: "nerdlucks_bad_guys.jpg", // Replace with the actual URL
  },
  {
    id: 12,
    name: "Bang",
    role: "Monstar",
    description: "One of the Monstars, known for his brute strength and size.",
    img: "bang_bad_guys.jpg", // Replace with the actual URL
  },
  {
    id: 13,
    name: "Bupkus",
    role: "Monstar",
    description: "One of the Monstars, known for his mischievous behavior.",
    img: "bupkus_bad_guys.jpg", // Replace with the actual URL
  },
  {
    id: 14,
    name: "Pound",
    role: "Monstar",
    description: "One of the Monstars, known for his athleticism and speed.",
    img: "pound_bad_guys.jpg", // Replace with the actual URL
  },
  {
    id: 15,
    name: "Blanko",
    role: "Monstar",
    description: "One of the Monstars, known for his friendly and naive personality.",
    img: "blanko_bad_guys.jpg", // Replace with the actual URL
  },
  // Add more Bad Guys characters as needed
];

const teams = [
  { name: "Cast LineUp", players: playersCast },
  { name: "The Loonie Toons", players: playersLoonieToons },
  { name: "The Bad Guys", players: playersBadGuys },
];

export default function TheLineUp() {
    return (
      <section className="container grid items-center gap-10 pb-8 pt-6 md:py-10">
        {teams.map((team) => (
          <Court key={team.name} teamName={team.name} players={team.players} />
        ))}
      </section>
    );
}
