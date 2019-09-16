import React from 'react'

export default function Quotes() {
  const getRandomSoftwareQuote = () => {
    const number = Math.floor(Math.random() * 17) // number between 0-17
    switch (number) {
      case 1:
        return '"The best thing about a boolean is even if you are wrong, you are only off by a bit." ―Anonymous'

      case 2:
        return '"Without requirements or design, programming is the art of adding bugs to an empty text file." ―Louis Srygley'

      case 3:
        return '"Before software can be reusable it first has to be usable." ―Ralph Johnson'

      case 4:
        return '"I think Microsoft named .Net so it wouldn’t show up in a Unix directory listing." ―Oktal'

      case 5:
        return '"There are two ways to write error-free programs; only the third one works." ―Alan J. Perlis'

      case 6:
        return '"The first step of any project is to grossly underestimate its complexity and difficulty." ―Nicoll Hunt'

      case 7:
        return '"Its not a bug – it’s an undocumented feature." ―Anonymous'

      case 8:
        return '"One man’s crappy software is another man’s full-time job." ―Jessica Gaston'

      case 9:
        return '"A good programmer is someone who always looks both ways before crossing a one-way street." ―Doug Linder'

      case 10:
        return '"Walking on water and developing software from a specification are easy if both are frozen." ―Edward V Berard'

      case 11:
        return '"If debugging is the process of removing software bugs, then programming must be the process of putting them in." ―Edsger Dijkstra'

      case 12:
        return '"To iterate is human, to recurse divine." ―L. Peter Deutsch'

      case 13:
        return '"Software undergoes beta testing shortly before it’s released. Beta is Latin for still doesn’t work." ―Anonymous'

      case 14:
        return '“Your code doesn’t work!” “It works on *my* machine.” “Fine, we’ll ship your machine!” ― And that’s how Docker started 🙂 ―Marabou'

      case 15:
        return '"In order to understand recursion, one must first understand recursion." ―Anonymous'

      case 16:
        return '"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do it blows your whole leg off." ―Bjarne Stroustrup'

      default:
        return '"In the one and only true way. The object-oriented version of Spaghetti code is, of course, Lasagna code." ―Roberto Waltman.'
    }
  }
  return <div>{getRandomSoftwareQuote()}</div>
}
