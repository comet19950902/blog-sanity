export default {
  name: "blockContent",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
      marks: {
        decorators: [
          {
            title: "Heading",
            value: "heading",
            blockEditor: {
              icon: () => "H",
            },
          },
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            title: "Color",
            name: "color",
            type: "color",
          },
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            name: "internalLink",
            type: "object",
            title: "Internal link",
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "Reference",
                to: [{ type: "blog" }],
              },
            ],
          },
        ],
      },
    },
    {
      type: "youtube",
    },
    {
      type: "color",
      name: "ads",
      title: "Google Ads",
    },
    {
      type: "color",
      name: "tablecontent",
      title: "Table of Content",
    },
    {
      type: "image",

      fields: [
        {
          name: "position",
          title: "Position",
          type: "string",
          options: {
            list: [
              { title: "Left", value: "left" },
              { title: "Right", value: "right" },
              { title: "Center", value: "center" },
            ],
            layout: "radio",
            isHighlighted: true,
          },
        },
        {
          type: "string",
          name: "alt",
          title: "Alt",
          options: {
            isHighlighted: true,
          },
        },
      ],
      options: {
        hotspot: true,
      },
    },

    {
      type: "code",
      options: {
        withFilename: true,
      },
    },
    {
      name: "table",
      title: "Table",
      type: "table",
    },
  ],
};
