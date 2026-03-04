


"use client";

import page from "@/app/page";
import { FrontendApiHelper } from "@/app/utils/frontendApiHelper";
import { useEffect, useState } from "react";


export default function DetailsData () {
  const [details , setDetails] = useState<any[]>([]);

  useEffect(() => {
    async function loadDetails() {
      const data = await  FrontendApiHelper(`/details/movie/${id}`);
      setDetails(data);
    }
    loadDetails();
  }, []);

  return (
    <div>
      {details.map((d) => (
        <p key={d.id}>{d.title}</p>
      ))}
    </div>
  );
}

    </div>
  )
}

export default DetailsData;