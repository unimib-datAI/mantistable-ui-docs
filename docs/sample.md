---
id: sample
title: Samples
sidebar_position: 5
---

# Samples Input and Output

This section provides example files showing **how to structure input tables** and the corresponding **generated outputs** in different formats.  
The documentation includes examples for two CSV tables: **mountains** and **movies**.  
Examples in **Turtle** and **XML** are shown in the documentation, while the full example files are available in the **/samples** folder in the root of the repository.

---

## Mountain Sample

The following example shows a table of mountains with their coordinates, elevation, and mountain range.  
This CSV file is transformed into semantic outputs such as RDF/Turtle to illustrate how the system maps structured data to linked data.

### CSV Table

```csv
Name,Coordinates,Elevation_m,Range
Mont Blanc,"45.832119, 6.865575",4805.59,Alps
Hohtälli,"45°59'20.3\"N 7°48'09.8\"E",3275,Pennine Alps
Matterhorn,"32T 395215 5093227",4478,Pennine Alps
Mount Everest,"27.9881, 86.9250",8848.86,Mahalangur Himal
```

### Turtle output

```ttl
@prefix ns1: <https://www.wikidata.org/wiki/Property:/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wikidata.org/wiki/Property:P2044> rdfs:label "elevation above sea level"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P4552> rdfs:label "mountain range"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P610> rdfs:label "highest point"^^xsd:string .

<https://www.wikidata.org/wiki/Q1374> a <https://www.wikidata.org/wiki/Q54050> ;
    rdfs:label "matterhorn"^^xsd:string ;
    ns1:P2044 "8848.86"^^xsd:float ;
    ns1:P4552 <https://www.wikidata.org/wiki/Q1270> .

<https://www.wikidata.org/wiki/Q513> rdfs:label "mount everest"^^xsd:string .

<https://www.wikidata.org/wiki/Q583> a <https://www.wikidata.org/wiki/Q54050> ;
    rdfs:label "mont blanc"^^xsd:string ;
    ns1:P2044 3275 ;
    ns1:P4552 <https://www.wikidata.org/wiki/Q765847> .

<https://www.wikidata.org/wiki/Q690177> a <https://www.wikidata.org/wiki/Q54050> ;
    rdfs:label "hohtälli"^^xsd:string ;
    ns1:P2044 4478 ;
    ns1:P4552 <https://www.wikidata.org/wiki/Q1270> .

<https://www.wikidata.org/wiki/Q924257> rdfs:label "mahalangur himal"^^xsd:string .

<https://www.wikidata.org/wiki/Q765847> a <https://www.wikidata.org/wiki/Q1061151> ;
    rdfs:label "alps"^^xsd:string .

<https://www.wikidata.org/wiki/Q1061151> rdfs:label "massif"^^xsd:string .

<https://www.wikidata.org/wiki/Q1270> a <https://www.wikidata.org/wiki/Q1061151> ;
    rdfs:label "pennine alps"^^xsd:string .

<https://www.wikidata.org/wiki/Q54050> rdfs:label "hill"^^xsd:string .
```

### XML output

```xml
<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF
   xmlns:ns1="https://www.wikidata.org/wiki/Property:/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q1374">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">matterhorn</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q54050"/>
    <ns1:P2044 rdf:datatype="http://www.w3.org/2001/XMLSchema#float">8848.86</ns1:P2044>
    <ns1:P4552 rdf:resource="https://www.wikidata.org/wiki/Q1270"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P4552">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mountain range</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q1061151">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">massif</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q765847">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">alps</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q1061151"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q583">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mont blanc</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q54050"/>
    <ns1:P2044 rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">3275</ns1:P2044>
    <ns1:P4552 rdf:resource="https://www.wikidata.org/wiki/Q765847"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P610">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">highest point</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q690177">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hohtälli</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q54050"/>
    <ns1:P2044 rdf:datatype="http://www.w3.org/2001/XMLSchema#integer">4478</ns1:P2044>
    <ns1:P4552 rdf:resource="https://www.wikidata.org/wiki/Q1270"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P2044">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">elevation above sea level</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q1270">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">pennine alps</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q1061151"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q513">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mount everest</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q924257">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mahalangur himal</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q54050">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">hill</rdfs:label>
  </rdf:Description>
</rdf:RDF>
```

---

## Movies Sample

This example shows a table of movies with their title, genre, language, and main actor.
It illustrates how the system can transform structured movie data into semantic outputs such as Turtle or XML.

### CSV Table

```csv
col0,col1,col2,col3
the matrix,action thriller,english,keanu reeves
shutter island,mystery film,english,leonardo dicaprio
```

### Turtle output

```ttl
@prefix ns1: <https://www.wikidata.org/wiki/Property:/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

<https://www.wikidata.org/wiki/Property:P136> rdfs:label "genre"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P1412> rdfs:label "languages spoken, written or signed"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P161> rdfs:label "cast member"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P17> rdfs:label "country"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P364> rdfs:label "original language of film or TV show"^^xsd:string .

<https://www.wikidata.org/wiki/Property:P800> rdfs:label "notable work"^^xsd:string .

<https://www.wikidata.org/wiki/Q1200678> rdfs:label "mystery film"^^xsd:string .

<https://www.wikidata.org/wiki/Q210364> rdfs:label "shutter island"^^xsd:string .

<https://www.wikidata.org/wiki/Q38111> rdfs:label "leonardo dicaprio"^^xsd:string .

<https://www.wikidata.org/wiki/Q83495> a <https://www.wikidata.org/wiki/Q3331189> ;
    rdfs:label "the matrix"^^xsd:string ;
    ns1:P136 <https://www.wikidata.org/wiki/Q3990883> ;
    ns1:P161 <https://www.wikidata.org/wiki/Q43416> ;
    ns1:P364 <https://www.wikidata.org/wiki/Q1860> .

<https://www.wikidata.org/wiki/Q10894548> rdfs:label "particular linguistics"^^xsd:string .

<https://www.wikidata.org/wiki/Q134556> rdfs:label "single"^^xsd:string .

<https://www.wikidata.org/wiki/Q3990883> a <https://www.wikidata.org/wiki/Q3331189> ;
    rdfs:label "action thriller"^^xsd:string ;
    ns1:P364 <https://www.wikidata.org/wiki/Q1860> .

<https://www.wikidata.org/wiki/Q43416> a <https://www.wikidata.org/wiki/Q134556> ;
    rdfs:label "keanu reeves"^^xsd:string .

<https://www.wikidata.org/wiki/Q1860> a <https://www.wikidata.org/wiki/Q10894548> ;
    rdfs:label "english"^^xsd:string .

<https://www.wikidata.org/wiki/Q3331189> rdfs:label "version, edition or translation"^^xsd:string .
```

### XML output

```xml
<?xml version="1.0" encoding="utf-8"?>
<rdf:RDF
   xmlns:ns1="https://www.wikidata.org/wiki/Property:/"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q1200678">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">mystery film</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P17">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">country</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q83495">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">the matrix</rdfs:label>
    <ns1:P136 rdf:resource="https://www.wikidata.org/wiki/Q3990883"/>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q3331189"/>
    <ns1:P364 rdf:resource="https://www.wikidata.org/wiki/Q1860"/>
    <ns1:P161 rdf:resource="https://www.wikidata.org/wiki/Q43416"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q1860">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">english</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q10894548"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q3331189">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">version, edition or translation</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P364">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">original language of film or TV show</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q3990883">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">action thriller</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q3331189"/>
    <ns1:P364 rdf:resource="https://www.wikidata.org/wiki/Q1860"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q10894548">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">particular linguistics</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P161">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">cast member</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q43416">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">keanu reeves</rdfs:label>
    <rdf:type rdf:resource="https://www.wikidata.org/wiki/Q134556"/>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q210364">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">shutter island</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P800">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">notable work</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q38111">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">leonardo dicaprio</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Q134556">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">single</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P136">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">genre</rdfs:label>
  </rdf:Description>
  <rdf:Description rdf:about="https://www.wikidata.org/wiki/Property:P1412">
    <rdfs:label rdf:datatype="http://www.w3.org/2001/XMLSchema#string">languages spoken, written or signed</rdfs:label>
  </rdf:Description>
</rdf:RDF>
```
