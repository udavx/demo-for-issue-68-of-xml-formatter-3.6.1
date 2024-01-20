import xmlFormatter from "xml-formatter";
import { XMLFormatterOptions } from "xml-formatter";

const opts: XMLFormatterOptions = {
    indentation: '    ',
    throwOnFailure: true,
    lineSeparator: '\n',
    collapseContent: true, // keeps text and tags on the same line i.e. <Tag>like this</Tag>
};

const rawXml = "<root><subelement/></root>"

const formattedXml = xmlFormatter(rawXml, opts);

console.log(formattedXml);
