// INT_GLOG_XML_ELEMENT.js

window.INT_GLOG_XML_ELEMENT = {
  "tables": {
    "INT_GLOG_XML_ELEMENT": {
      "columns": {
        "GLOG_XML_ELEMENT_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "This is the External System Gid. "
        },
        "GLOG_XML_ELEMENT_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false,
          "info": "This is the interface type indicating the XML being supported. "
        },
        "OUT_XML_PROFILE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "foreign_key": "OUT_XML_PROFILE",
          "info": "Spcifies the default outbound XML profile to be used for the interface.  This default is overridden by the profile defined for the External System. "
        },
        "DESCRIPTION": {
          "type": "VARCHAR2(255)",
          "nullable": true,
          "info": "This is a description "
        },
        "ELEMENT_TYPE": {
          "type": "VARCHAR2(8)",
          "nullable": true,
          "values": [
            "In",
            "Out",
            "Both"
          ],
          "info": "Specify if the element is for  inbound, outbound or both "
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
        "IS_LONG_RUNNING_TASK": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "Y",
            "N"
          ],
          "info": "If Y, any transmission with this transaction element is a long running task and should be monitored in the LONG_RUNNING_TASK table."
        }
      },
      "fk_tables": [
        "EXTERNAL_SYSTEM_OUT_XML",
        "INT_EXT_SYS_TRANSLATION",
        "INT_MANAGED_CHILDREN_MAP",
        "XML_TEMPLATE"
      ]
    }
  }
};
