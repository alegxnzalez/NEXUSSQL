// OUT_XML_PROFILE.js

window.OUT_XML_PROFILE = {
  "tables": {
    "OUT_XML_PROFILE": {
      "columns": {
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Globally unique identifier for an outbound xml profile. "
        },
        "OUT_XML_PROFILE_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "Domain unique identifier for an outbound xml profile. "
        },
        "DEFAULT_MODE": {
          "type": "VARCHAR2(3)",
          "nullable": true,
          "values": [
            "MIN",
            "MAX"
          ],
          "info": "Specifies whether the default mode for generating XML should be MIN or MAX.  When not specified, the property is the default. "
        },
        "SHOULD_VALIDATE": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies if the XML produced should conform to the schema. "
        },
        "XML_TEMPLATE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "XML_TEMPLATE",
          "info": "XML template ID "
        },
        "USE_TEMPLATE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "If it equals \"Y\", integration will use template to build the XML"
        },
        "INT_PREFERENCE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "INT_PREFERENCE"
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
        "DOCUMENT_DEF_CHECK",
        "EXTERNAL_SYSTEM_OUT_XML",
        "GTM_DECL_MESSAGE",
        "INT_GLOG_XML_ELEMENT",
        "OUT_XML_PROFILE_CHILD",
        "OUT_XML_PROFILE_D",
        "OUT_XML_PROFILE_XPATH",
        "SERVPROV",
        "STYLESHEET_PROFILE",
        "WEB_SVC_OPERATION_PARAM"
      ]
    }
  }
};
