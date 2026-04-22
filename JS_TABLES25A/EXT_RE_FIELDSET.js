// EXT_RE_FIELDSET.js

window.EXT_RE_FIELDSET = {
  "tables": {
    "EXT_RE_FIELDSET": {
      "columns": {
        "EXT_RE_FIELDSET_GID": {
          "type": "VARCHAR2(101)",
          "nullable": false,
          "key_value": true,
          "info": "Identifies the fieldset "
        },
        "EXT_RE_FIELDSET_XID": {
          "type": "VARCHAR2(50)",
          "nullable": false
        },
        "VALID_EXTERNAL_ENGINE_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_RATING_ENGINE",
          "info": "Identifies the external rating engine that can utilize this particular fieldset "
        },
        "CONNECTION_TYPE": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "J",
            "S",
            "W"
          ],
          "info": "Defines the type of transport mechanism used.  In this case, S = Socket, J = javaclass, W= web service which implements REXPublicExternalInterface.java  Other mechanisms may be supported in future iterations. "
        },
        "FIELD_FORMAT": {
          "type": "VARCHAR2(1)",
          "nullable": true,
          "values": [
            "F",
            "V"
          ],
          "info": "Defines the field format type.  V = variable, delimited.  F = fixed "
        },
        "FIELD_DELIMITER": {
          "type": "VARCHAR2(20)",
          "nullable": true,
          "info": "Defines the string used to separate fields in the output stream.  No fixed width. "
        },
        "INCLUDE_RBI_GID": {
          "type": "VARCHAR2(1)",
          "nullable": false,
          "values": [
            "Y",
            "N"
          ],
          "info": "Specifies whether or not to include the RBI gid in the output stream. "
        },
        "JAVA_CLASS": {
          "type": "VARCHAR2(120)",
          "nullable": true,
          "info": "Specifies the unqualified name of the java class which will implement the link to the external rating engine. "
        },
        "CONNECTION_PROPERTY": {
          "type": "VARCHAR2(50)",
          "nullable": true,
          "info": "Defines the base property name for a fieldset.  All properties used by a fieldset will be prepended with \"glog.rate.RateEngine.\"  The socket connection type requires two properties: glog.rate.RateEngine. .URL and glog.rate.RateEngine. .port "
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
        "EXTERNAL_SYSTEM_GID": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "EXTERNAL_SYSTEM",
          "info": "This flag would specify the external system that needs to be used for rating. "
        },
        "OTM_RELEASE": {
          "type": "VARCHAR2(101)",
          "nullable": true,
          "foreign_key": "OTM_RELEASE",
          "info": "Indicates the release to which the record is added."
        }
      },
      "fk_tables": [
        "ACCESSORIAL_COST",
        "EXT_RE_FIELDSET_D",
        "RATE_GEO_COST",
        "RATE_OFFERING"
      ]
    }
  }
};
