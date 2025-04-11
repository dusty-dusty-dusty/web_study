package dbcon;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.*;
public class ItemDAO{
	
	static String driver 	= "oracle.jdbc.driver.OracleDriver";
	static String url 		= "jdbc:oracle:thin:@127.0.0.01:1521:xe";
	static String user 		= "scott";
	static String pass		= "tiger";
	
	
	Connection con = null;
	PreparedStatement ps =null;
	ResultSet rs = null;
	
	public ItemDAO() throws Exception{
		

		//1 DB드라이버 코딩
		Class.forName(driver);		
	}
	
	
	public void insert(ItemVO vo)throws Exception{
		
		
		//2 연결객채 얻어오기
		con = DriverManager.getConnection(url, user, pass);
		//3 SQL 문장
		String sql = "INSERT INTO ITEM"
				+ " VALUES(item_seq.nextval, ?, ?, ?, ?)";
		
		
		//4 전송객체 얻어오기 PrepareStatement
		ps = con.prepareStatement(sql);
		//sql문장의 ? 지정
		ps.setString( 1, vo.getName());
		ps.setString( 2, vo.getItem());
		ps.setString( 3, vo.getContent());
		ps.setString( 4, vo.getStars());
		//5 전송 executeUpdate()
		int result = ps.executeUpdate();
		System.out.println(result+"행을 수행하였습니다.");
		//7닫기
		//[6.결과받아처리]
		
				/*} catch (Exception e) {
					System.out.println("실패 : "+ e.getMessage() );
					e.printStackTrace(); //구체적으로
				}finally {*/
					//7.
					try { 
						con.close();
						ps.close();
					}catch (SQLException e) {
						e.printStackTrace();
					}
					
				}
}
