webpackJsonp([64],{1901:function(t,n,e){var o=e(0),c=e(90),r=e(426).PageRenderer;r.__esModule&&(r=r.default);var i=c({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(2004)}},componentWillMount:function(){},render:function(){return o.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},2004:function(t,n){t.exports='These `<Accordion>` components follow the [WAI-AIRA spec for accordions](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion).\n\nThis component does not directly support any options for requiring that one section always be open, or else limiting that no more than one section can be open. However, this component uses a fully-controlled pattern and this functionality could be implemented with a wrapping component in consuming code.\n\nAn `<Accordion>` can have any number of `<Accordion.Item>` children.\nEach `<Accordion.Item>` should have exactly one `<Accordion.Header>` and one `<Accordion.Panel>` as children.\n\n## Component Variations\n\n### With arrows\n\n```react\nplain: true\nshowSource: true\nstate: { expandedSections: [0] }\n---\n<AccordionDemo>\n\t<Accordion expandedSections={state.expandedSections} onExpansion={expandedSections => setState({expandedSections})}>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header subtitle="Subtitle for Section One.">\n\t\t\t\tSection One Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Name" />\n\t\t\t\t\t<Input small placeholder="Email" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header>\n\t\t\t\tSection Two Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Home address" />\n\t\t\t\t\t<Input small placeholder="Zip code" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header>\n\t\t\t\tSection Three Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Mother\'s maiden name" />\n\t\t\t\t\t<Input small placeholder="Name of your first pet" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t</Accordion>\n</AccordionDemo>\n```\n\n### With `hideArrows` and custom indicators\n\nFor usability, it is suggested that custom indicators have `tabindex: -1` and not be a part of the tab order.\n\n```react\nplain: true\nshowSource: true\nstate: { expandedSections: [0, 2] }\n---\n<AccordionDemo>\n\t<Accordion hideArrows expandedSections={state.expandedSections} onExpansion={expandedSections => setState({expandedSections})}>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header renderCustomIndicator={AccordionCustomIndicator}>\n\t\t\t\tSection One Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Name" />\n\t\t\t\t\t<Input small placeholder="Email" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header renderCustomIndicator={AccordionCustomIndicator}>\n\t\t\t\tSection Two Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Home address" />\n\t\t\t\t\t<Input small placeholder="Zip code" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header renderCustomIndicator={AccordionCustomIndicator}>\n\t\t\t\tSection Three Title\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<Form>\n\t\t\t\t\t<Input small placeholder="Mother\'s maiden name" />\n\t\t\t\t\t<Input small placeholder="Name of your first pet" />\n\t\t\t\t</Form>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t</Accordion>\n</AccordionDemo>\n```\n\n### With subtitles\n\nIn most cases the subtitle should be hidden on mobile viewports, but that is a responsibility of the consumer.\n\n```react\nplain: true\nshowSource: true\nstate: { expandedSections: [] }\n---\n<AccordionDemo>\n\t<Accordion expandedSections={state.expandedSections} onExpansion={expandedSections => setState({expandedSections})}>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header subtitle="The first book of the Bible.">\n\t\t\t\tGenesis\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<div>In the beginning, God created the heavens and the earth.</div>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header subtitle="The second book of the Bible.">\n\t\t\t\tExodus\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<div>And these are the names of the sons of Israel who came to Egypt; with Jacob, they each came with his \u230afamily\u230b:</div>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t\t<Accordion.Item>\n\t\t\t<Accordion.Header subtitle="The third book of the Bible.">\n\t\t\t\tLeviticus\n\t\t\t</Accordion.Header>\n\t\t\t<Accordion.Panel>\n\t\t\t\t<div>Then Yahweh called to Moses and spoke to him from the tent of assembly, saying,</div>\n\t\t\t</Accordion.Panel>\n\t\t</Accordion.Item>\n\t</Accordion>\n</AccordionDemo>\n```\n'}});
//# sourceMappingURL=64.970e95a3.chunk.js.map