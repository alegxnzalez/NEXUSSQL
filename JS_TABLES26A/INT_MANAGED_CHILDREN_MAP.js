// INT_MANAGED_CHILDREN_MAP.js

window.INT_MANAGED_CHILDREN_MAP = {
  "tables": {
    "INT_MANAGED_CHILDREN_MAP": {
      "description": "define an alias (CHILD_ELEMENT_ALIAS) for a child element of GLOG_XML_ELEMENT_GID corresponding to xpath (CHILD_ELEMENT_PATH)",
      "columns": {
        "GLOG_XML_ELEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INT_GLOG_XML_ELEMENT",
          "info": "Glog XML Element ID"
},
        "CHILD_ELEMENT_ALIAS": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Alias  for a child element.  The same child element can have multiple aliases depended on customer need."
},
        "TABLE_NAME": {
          "type": "VARCHAR2(30)",
          "nullable": false,
          "info": "name in otm application. This is different from database table name.  The rules is tot captalize the first letter and any letter after hyphen and remove any hyphen."
},
        "CHILD_ELEMENT_PATH": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "info": "Provides full xpath for the child element corresponding the alias and replace '/' with '.'."
},
        "DOMAIN_NAME": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain Name"
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
      "fk_tables": []
    }
  }
};