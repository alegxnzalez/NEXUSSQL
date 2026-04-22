// WEB_SVC_OPERATION_PARAM.js

window.WEB_SVC_OPERATION_PARAM = {
  "tables": {
    "WEB_SVC_OPERATION_PARAM": {
      "columns": {
        "WEB_SERVICE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WEB_SERVICE_OPERATION"
        },
        "OPERATION_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true,
          "foreign_key": "WEB_SERVICE_OPERATION"
        },
        "PARAMETER_NAME": {
          "type": "VARCHAR2(500)",
          "nullable": false,
          "key_value": true
        },
        "WSDL_SCHEMA_TYPE_LOCAL": {
          "type": "VARCHAR2(200)",
          "nullable": false
        },
        "WSDL_SCHEMA_TYPE_NAMESPACE": {
          "type": "VARCHAR2(500)",
          "nullable": false
        },
        "IS_REQUIRED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_DOCUMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_ATTACHMENT": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_ZIPPED": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "IS_RETURN_VALUE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ]
        },
        "TRANSFORMER_STYLESHEET": {
          "type": "VARCHAR2(128)",
          "nullable": true
        },
        "TRANSFORMER_PLUGIN_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "JAVA_PLUGIN"
        },
        "DATA_QUERY_TYPE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "DATA_QUERY_TYPE"
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OUT_XML_PROFILE"
        },
        "ENCODING_STYLE_URI": {
          "type": "VARCHAR2(500)",
          "nullable": true,
          "info": "Contains the URI of the encoding scheme for the parameter e.g. SOAP encoding"
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
        "IS_BODY_PARAM": {
          "type": "VARCHAR2(1)",
          "nullable": true
        }
      },
      "fk_tables": []
    }
  }
};
