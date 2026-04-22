// XML_TEMPLATE.js

window.XML_TEMPLATE = {
  "tables": {
    "XML_TEMPLATE": {
      "description": "Template XML",
      "columns": {
        "XML_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "XML template ID"
},
        "XML_TEMPLATE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "XML template XID"
},
        "TEMPLATE_BLOB": {
          "type": "CLOB",
          "nullable": true,
          "info": "XML template"
},
        "USE_DATA": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
                    "Y",
                    "N"
          ],
          "info": "If it is 'N', the actual data in template_Blob is ignored.  Otherwise, the data is utilized to further restrict the output."
},
        "DESCRIPTION": {
          "type": "VARCHAR2(2000)",
          "nullable": true,
          "info": "Description about the template and its usage"
},
        "GLOG_XML_ELEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "INT_GLOG_XML_ELEMENT",
          "info": "Specify the XML element ID which this tempalte will be applied"
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false
},
        "INSERT_USER": {
          "type": "VARCHAR2(128)",
          "nullable": false
},
        "INSERT_DATE": {
          "type": "DATE",
          "nullable": false
},
        "UPDATE_USER": {
          "type": "VARCHAR2(128)",
          "nullable": true
},
        "UPDATE_DATE": {
          "type": "DATE",
          "nullable": true
}
      },
      "fk_tables": [
        "OUT_XML_PROFILE"
]
    }
  }
};