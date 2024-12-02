import React, { useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

interface EditCourseDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (courseData: any) => void;
  courseData: any;
}

const EditCourseDialog: React.FC<EditCourseDialogProps> = ({
  open,
  onClose,
  onSubmit,
  courseData: initialCourseData,
}) => {
  const [courseData, setCourseData] = React.useState(initialCourseData);

  useEffect(() => {
    setCourseData(initialCourseData);
  }, [initialCourseData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(courseData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Chỉnh sửa môn học</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mã môn học"
                required
                value={courseData.code}
                onChange={(e) => setCourseData({...courseData, code: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Tên môn học"
                required
                value={courseData.name}
                onChange={(e) => setCourseData({...courseData, name: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Giảng viên phụ trách"
                required
                value={courseData.instructor}
                onChange={(e) => setCourseData({...courseData, instructor: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Số tín chỉ"
                type="number"
                required
                value={courseData.credits}
                onChange={(e) => setCourseData({...courseData, credits: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Loại môn học</InputLabel>
                <Select
                  value={courseData.type}
                  label="Loại môn học"
                  onChange={(e) => setCourseData({...courseData, type: e.target.value})}
                >
                  <MenuItem value="basic">Cơ bản</MenuItem>
                  <MenuItem value="advanced">Nâng cao</MenuItem>
                  <MenuItem value="specialized">Chuyên ngành</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mô tả môn học"
                multiline
                rows={4}
                value={courseData.description}
                onChange={(e) => setCourseData({...courseData, description: e.target.value})}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button type="submit" variant="contained">Lưu thay đổi</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditCourseDialog; 