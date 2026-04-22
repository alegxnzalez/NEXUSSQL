// INT_EXT_SYS_TRANSLATION.js

window.INT_EXT_SYS_TRANSLATION = {
  "tables": {
    "INT_EXT_SYS_TRANSLATION": {
      "columns": {
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "This is the External System Gid. "
        },
        "GLOG_XML_ELEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "INT_GLOG_XML_ELEMENT",
          "info": "This is the interface type indicating the XML being supported. "
        },
        "SEQUENCE_NUM": {
          "type": "NUMBER(3)",
          "nullable": false,
          "key_value": true,
          "info": "This is the sequence number used to indicate the order of the stylesheets applied. "
        },
        "STYLESHEET_NAME": {
          "type": "VARCHAR2(128)",
          "nullable": true,
          "info": "This is the filename of the stylesheet profile to be applied. "
        },
        "APPLY_XSL_TO": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "T",
            "G"
          ],
          "info": "Specifies if the XSL transformation should be applied to the Transmission or the GLogXMLElement.  This only applies to Transmission with multiple Transactions. "
        },
        "ADD_XML_DECLARATION": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "info": "Specifies if the XML Declaration should be suppressed. "
        },
        "MULTI_TRANSACTION_WRAPPER": {
          "type": "VARCHAR2(30)",
          "nullable": true,
          "info": "Specifies the element name used to wrap all the Transactions.  Default is the Transmission element.  This only applies to Transmission with multiple Transactions. "
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
        },
        "STYLESHEET_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "STYLESHEET_PROFILE",
          "info": "Stylesheet Profile to transform the xml message."
        }
      },
      "fk_tables": []
    }
  }
};
