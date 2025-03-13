export const Card = () => { 
    return <div className="rounded-lg bg-white ">
          <img  className="h-38 w-170 rounded-lg mb-5" src="https://assets.leetcode.com/users/images/3f99efe8-e802-4ca9-95df-961be36afd6f_1687290708.6801906.jpeg" alt="" />
         <img  className="h-38 w-170 rounded-lg mb-5" src="https://assets.leetcode.com/users/images/b87362f9-2667-4857-a41b-178dd1be484c_1669795244.530203.png" alt="" />
         <img className="h-38 w-180 rounded-lg mb-5" src="/Contribute.jpg" alt="" />
         <div className="flex rounded-lg gap-5">
            <div>
                <h1>LeetCode Contest</h1>
                <p>Participate and win your prizes</p>
                <button className="mt-3 py-1 border-1 border-gray-500 rounded-lg font-semibold px-2 hover:bg-gray-300">Join Contest</button>
            </div>
            <div>
                <img className="w-22" src="trophy.avif" alt="" />
            </div>
         </div>
         <div className="flex rounded-lg gap-5 mt-10">
            <div>
                <img className="w-22" src="message.png" alt="" />
            </div>
            <div>
                <h1>Discuss Now</h1>
                <p>Share Interview Questions</p>
                <p>Get Solutions</p>
                <button className="mt-3 py-1 border-1 border-gray-500 rounded-lg font-semibold px-2 hover:bg-gray-300">Let's Discuss</button>
            </div>
         </div>
         <div className="flex rounded-lg gap-5 mt-10">
            <div>
                <h1>Share with leetCoins</h1>
                <p>Use your points in our</p>
                <p>LeetCode Store</p>
                <button className="mt-3 py-1 border-1 border-gray-500 rounded-lg font-semibold px-2 hover:bg-gray-300">Join Contest</button>
            </div>
            <div>
                <img className="w-22" src="trophy.avif" alt="" />
            </div>
         </div>
    </div>
}